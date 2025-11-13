import {
	BufferAttribute,
	BufferGeometry,
	Color,
	HalfFloatType,
	Mesh,
	OrthographicCamera,
	Scene,
	ShaderMaterial,
	Vector2,
	WebGLRenderer,
	type Texture,
	type WebGLRendererParameters,
} from 'three';
import { EffectComposer, RenderPass } from 'postprocessing';
import SF3Viewport from './Viewport';
import SF3ViewManager from '../@view/Manager';

//@ts-expect-error - Shader is not typed
import vertexShader from '../@shaders/vertex.glsl';
//@ts-expect-error - Shader is not typed
import fragmentShader from '../@shaders/fragment.glsl';

export default class SF3Renderer {
	static instance: SF3Renderer;

	#r: WebGLRenderer;
	#c: EffectComposer;

	#postScene: Scene;
	#postCamera: OrthographicCamera;
	#postShader: ShaderMaterial;

	#viewport: SF3Viewport;
	#manager: SF3ViewManager;

	static getInstance(options: Partial<WebGLRendererParameters> = {}) {
		if (!SF3Renderer.instance) {
			SF3Renderer.instance = new SF3Renderer(options);
		}
		return SF3Renderer.instance;
	}

	constructor(options: Partial<WebGLRendererParameters>) {
		this.#viewport = SF3Viewport.getInstance();
		this.#manager = SF3ViewManager.getInstance();

		this.#r = new WebGLRenderer(options);
		this.#c = new EffectComposer(this.#r, { frameBufferType: HalfFloatType });

		this.#postScene = new Scene();
		this.#postCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

		this.#postShader = new ShaderMaterial({
			uniforms: {
				tDiffuse: { value: null },
				uColor: { value: new Color(0x15f6df) },
				colorNum: { value: 4 },
				resolution: {
					value: new Vector2(this.#viewport.width, this.#viewport.height),
				},
				time: { value: 0 },
			},
			vertexShader,
			fragmentShader,
			transparent: true,
		});

		const triangle = new BufferGeometry();
		const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
		const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);

		triangle.setAttribute('position', new BufferAttribute(vertices, 3));
		triangle.setAttribute('uv', new BufferAttribute(uvs, 2));

		const postMesh = new Mesh(triangle, this.#postShader);
		postMesh.frustumCulled = false;
		this.#postScene.add(postMesh);

		const rp: RenderPass = new RenderPass(this.#postScene, this.#postCamera);
		this.#c.addPass(rp);

		this.#r.setPixelRatio(1);
	}

	#compile() {
		const { rt, scene, camera } = this.#manager.activeScene;
		this.#r.setRenderTarget(rt);

		this.#r.clear(true, true, true);
		this.#r.render(scene, camera);
		this.#r.setRenderTarget(null);

		//@ts-expect-error - Texture is not typed
		this.#postShader.uniforms.tDiffuse.value = rt.texture as Texture;
	}

	resize() {
		const { width, height } = this.#viewport;
		this.#r.setSize(width, height);
		this.#c.setSize(width, height);
	}

	render(_time: number, _dt: number) {
		// const { scene, camera } = this.#manager.activeScene;
		// this.#r.render(scene, camera);
		if (this.#postShader.uniforms.time) {
			this.#postShader.uniforms.time.value = _time * 0.01;
		}

		this.#compile();
		this.#c.render();

		// this.#r.render(time, dt);
		// console.log(time, dt);
	}

	get domElement(): HTMLCanvasElement {
		return this.#r.domElement;
	}
}
