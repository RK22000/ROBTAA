<h1 class="text-center mb-0 mt-10">Diffusion Gan Models</h1>
<h2 class="text-end mt-0">18 Nov 2022</h2>

## Late night post because this just clicked

### Quick recap

I've been trying to understand diffusion models like Stable Diffusion models after image generation models became really popular. I heard of Stable Diffusion model from an ML group of ML enthusiasts that I'd meet on Thursday evenings. I barely understood anything the first few times we met but recently we discussed a paper on cold diffusion models that seemed to clear up a lot for me.

## Diffusion models

Here's what I understood about how diffusion based generative models work.

Imagine you see this distorted image

> ![Blurry Aang Haggling](../Haggaling_Aangs/aang_distorted_0.5.png)
>
> Fig. 1

Then you being the clever person that your are might be able to recognize that this is in fact a distorted image of Aang haggling with the pirates for the water bending scroll.

> ![Blurry Aang Haggling](../Haggaling_Aangs/aang_distorted_0.0.png)
>
> Fig. 2

Just like your able to recognize Aang from having spent countless hours binge watching Avatar, a neural
network can also be trained to recognize and even restore any distortions to images. (We can discuss how
later)

Now are you still able to recognize Aang when the image is distorted a little more?

> ![Blurry Aang Haggling](../Haggaling_Aangs/aang_distorted_0.8.png)
>
> Fig. 3

How bout now?

> ![Blurry Aang Haggling](../Haggaling_Aangs/aang_distorted_1.0.png)
>
> Fig. 4

I see nothing but random static noise here, but surprisingly it's  possible to train a neural network to restore even images that are this distorted. Think about it. You were able to see patterns in `Fig. 1` that gave away what the original image was. Those patters are still present in `Fig. 3`. Only they are harder to spot. Just like that, there are patterns in `Fig. 4`, but these patters are significantly harder to spot. However, the defining trait of neural networks is that they can be trained to spot nearly imperceptible patterns. That's why its possible to train a neural network to restore an image as distorted as `Fig. 4`.

Now the really cool thing about such a trained neural network is that it will even be able to spot patterns
in this image `Fig. 5`.

> ![Blurry Aang Haggling](../Haggaling_Aangs/random_noise.png)
>
> Fig. 5

Now `Fig. 5` may look like the same kind of extremely distorted image as `Fig. 4`, but it is not. It is in fact actually just random noise. And yet a well trained network will be able to restore this into an image
of Aang.

Theres more I wanna write but good night for now! Till then you can check out the code I wrote to generate the distorted images [here](https://github.com/RK22000/noisy-image/blob/main/Image_Distortion.ipynb)

### References

> Cold Diffusion: Inverting Arbitrary Image Transforms Without Noise
>
> Arpit Bansal (University of Maryland), et al.
>
>[https://arxiv.org/abs/2208.09392](https://arxiv.org/abs/2208.09392)
