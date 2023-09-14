<h1 class="blog-title">Diffusion Gan Models</h1>
<h2 class="text-end mt-0">18 Nov 2022</h2>

<h2>Late night post because this just clicked</h2>
<h3>Quick recap</h3>
<p>I&#39;ve been trying to understand diffusion models like Stable Diffusion models after image generation models became really popular. I heard of Stable Diffusion model from an ML group of ML enthusiasts that I&#39;d meet on Thursday evenings. I barely understood anything the first few times we met but recently we discussed a paper on cold diffusion models that seemed to clear up a lot for me.</p>
<h2>Diffusion models</h2>
<p>Here&#39;s what I understood about how diffusion based generative models work.</p>
<p>Imagine you see this distorted image</p>
<blockquote>
<p><img src="../Haggaling_Aangs/aang_distorted_0.5.png" alt="Blurry Aang Haggling"></p>
<p>Fig. 1</p>
</blockquote>
<p>Then you being the clever person that your are might be able to recognize that this is in fact a distorted image of Aang haggling with the pirates for the water bending scroll.</p>
<blockquote>
<p><img src="../Haggaling_Aangs/aang_distorted_0.0.png" alt="Blurry Aang Haggling"></p>
<p>Fig. 2</p>
</blockquote>
<p>Just like your able to recognize Aang from having spent countless hours binge watching Avatar, a neural
network can also be trained to recognize and even restore any distortions to images. (We can discuss how
later)</p>
<p>Now are you still able to recognize Aang when the image is distorted a little more?</p>
<blockquote>
<p><img src="../Haggaling_Aangs/aang_distorted_0.8.png" alt="Blurry Aang Haggling"></p>
<p>Fig. 3</p>
</blockquote>
<p>How bout now?</p>
<blockquote>
<p><img src="../Haggaling_Aangs/aang_distorted_1.0.png" alt="Blurry Aang Haggling"></p>
<p>Fig. 4</p>
</blockquote>
<p>I see nothing but random static noise here, but surprisingly it&#39;s  possible to train a neural network to restore even images that are this distorted. Think about it. You were able to see patterns in <code>Fig. 1</code> that gave away what the original image was. Those patters are still present in <code>Fig. 3</code>. Only they are harder to spot. Just like that, there are patterns in <code>Fig. 4</code>, but these patters are significantly harder to spot. However, the defining trait of neural networks is that they can be trained to spot nearly imperceptible patterns. That&#39;s why its possible to train a neural network to restore an image as distorted as <code>Fig. 4</code>.</p>
<p>Now the really cool thing about such a trained neural network is that it will even be able to spot patterns
in this image <code>Fig. 5</code>.</p>
<blockquote>
<p><img src="../Haggaling_Aangs/random_noise.png" alt="Blurry Aang Haggling"></p>
<p>Fig. 5</p>
</blockquote>
<p>Now <code>Fig. 5</code> may look like the same kind of extremely distorted image as <code>Fig. 4</code>, but it is not. It is in fact actually just random noise. And yet a well trained network will be able to restore this into an image
of Aang.</p>
<p>Theres more I wanna write but good night for now! Till then you can check out the code I wrote to generate the distorted images <a href="https://github.com/RK22000/noisy-image/blob/main/Image_Distortion.ipynb">here</a></p>
<h3>References</h3>
<blockquote>
<p>Cold Diffusion: Inverting Arbitrary Image Transforms Without Noise</p>
<p>Arpit Bansal (University of Maryland), et al.</p>
<p><a href="https://arxiv.org/abs/2208.09392">https://arxiv.org/abs/2208.09392</a></p>
</blockquote>
