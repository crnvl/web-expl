import {
  Autofocus,
  Bloom,
  BrightnessContrast,
  ChromaticAberration,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { KernelSize, Resolution, BlendFunction } from "postprocessing";
import { FC } from "react";

const PostProcessing: FC = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={1} // The bloom intensity.
        kernelSize={KernelSize.VERY_LARGE} // blur kernel size
        luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        mipmapBlur={true} // Enables or disables mipmap blur.
        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
      />
      <Vignette
        offset={0.3} // vignette offset
        darkness={0.75} // vignette darkness
        eskil={false} // Eskil's vignette technique
        blendFunction={BlendFunction.NORMAL} // blend mode
      />
    </EffectComposer>
  );
};

export default PostProcessing;
