import {
	HalfFloatType,
	LinearFilter,
	PerspectiveCamera,
	Scene,
	WebGLRenderTarget,
} from 'three';
import SF3Viewport from '../../@core/Viewport';

export default class SF3AbstractScene {
	#scene: Scene;
	#camera: PerspectiveCamera;
	#viewport: SF3Viewport;

	#rt: WebGLRenderTarget;

	constructor() {
		this.#viewport = SF3Viewport.getInstance();

		this.#rt = new WebGLRenderTarget(
			this.#viewport.width,
			this.#viewport.height,
			{
				samples: 1,
				type: HalfFloatType,
				minFilter: LinearFilter,
				magFilter: LinearFilter,
				stencilBuffer: false,
				depthBuffer: true,
			}
		);

		this.#scene = new Scene();
		this.#camera = new PerspectiveCamera(55, 1, 0.1, 10);
		this.#camera.position.z = 3;
		this.#camera.position.y = 3;
		this.#camera.position.x = -2;
		this.#camera.lookAt(0, -0.2, 0);
	}

	render(_time: number, _dt: number) {}

	resize() {
		this.#camera.aspect = this.#viewport.width / this.#viewport.height;
		this.#camera.updateProjectionMatrix();
	}

	get rt(): WebGLRenderTarget {
		return this.#rt;
	}

	get scene(): Scene {
		return this.#scene;
	}

	get camera(): PerspectiveCamera {
		return this.#camera;
	}
}
