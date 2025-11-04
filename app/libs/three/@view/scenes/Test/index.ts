import {
	DRACOLoader,
	GLTFLoader,
	type GLTF,
} from 'three/examples/jsm/Addons.js';
import {
	DirectionalLight,
	Mesh,
	MeshNormalMaterial,
	type Object3D,
} from 'three';
import SF3AbstractScene from '../AbstractScene';
import gsap from 'gsap/all';
import { randomFloat } from '~/libs/common/math';

export default class SF3TestScene extends SF3AbstractScene {
	#dracoLoader: DRACOLoader;
	#gltfLoader: GLTFLoader;

	constructor() {
		super();

		this.#dracoLoader = new DRACOLoader();
		this.#dracoLoader.setDecoderPath('/@gl/libs/draco/');
		this.#dracoLoader.setWorkerLimit(10);
		this.#dracoLoader.setDecoderConfig({ type: 'wasm' });
		this.#dracoLoader.preload();

		this.#gltfLoader = new GLTFLoader();
		this.#gltfLoader.setDRACOLoader(this.#dracoLoader);

		const light = new DirectionalLight(0xffffff, 1);
		light.position.set(10, 10, 10);
		this.scene.add(light);

		this.#gltfLoader
			.loadAsync('/@gl/models/logo-v1.glb')
			.then((gltf: GLTF) => {
				gsap.to(gltf.scene.rotation, {
					y: randomFloat(-Math.PI / 4, Math.PI / 4),
					duration: randomFloat(3, 6),
					ease: 'power3.inOut',
					repeat: -1,
					repeatDelay: randomFloat(1, 3),
					yoyo: true,
				});

				gltf.scene.traverse((child: Object3D) => {
					if (child instanceof Mesh) {
						child.material = new MeshNormalMaterial();
						gsap.to(child.position, {
							y: randomFloat(-1, 1),
							duration: randomFloat(3, 6),
							ease: 'power3.inOut',
							repeat: -1,
							yoyo: true,
						});
					}
				});

				this.scene.add(gltf.scene);
			})
			.catch((error: Error) => {
				console.error(error);
			});
	}

	override resize() {
		super.resize();
	}

	override render(_time: number, _dt: number) {
		super.render(_time, _dt);
	}
}
