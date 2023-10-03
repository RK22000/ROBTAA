<h1 class="blog-title">Boost your scores in SECs</h1>
<h2 class="blog-subtitle">Sun, 20 Dec 2020 </h2><p>I previously wrote a post where I quickly and roughly explored an idea of enhancing CNNs by replacing their terminal dense layer with an SVC. I then got a chance to further explore that idea a bit more empirically for an assignment in my Intro to ML class. This time I tested out this boosting teching on the FashionMNIST dataset and tracked the boosting effect of different SVC kernels on models trained to a different number of Epochs. As a result I found that this boosting technique appears to be an easy drop in solution to boost to a trained CNN.</p>
<h2>Introduction</h2>
<p><a href="https://scikit-learn.org/stable/modules/svm.html">Support Vector Classifier (SVC)</a> are a powerful technique in the realm of classification problems. They translate samples into vectors in a vector space and find a hyperplane within that vector space that can separate the samples into their respective classes. This is a versatile technique that has been proven to work in a wide variety of scenarios, so much so that it is often used as a meta classifier to ensemble other classification models by stacking the outputs of those models into a vector to use as an input to an SVC. In this project I test the effectiveness of using an SVC to boost the classification accuracy of Convolution Neural Network (CNN) by replacing its terminal SoftMax Activation layer with an SVC. I called this boosted model SEC (SVC Enhanced CNN).</p>
<h2>Method</h2>
<p>To develop this model, I used <a href="https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html#creating-models">PyTorch</a> to build a simple CNN and <a href="https://scikit-learn.org/stable/modules/svm.html">Scikit Learn</a> to build the SVC. For training this model I first trained the CNN as a regular CNN and then used the trained CNN to generate a new training and testing set by mapping each sample in the training and testing datasets to the output from the last hidden layer after passing the sample through the trained CNN. These two new datasets served as the training and testing set to build the SVC. Finally, once both the CNN and SVC were trained, I put both the models together into a composite SVC-Enhanced-CNN model (SEC) that looks like the model in Fig.1.</p>
<blockquote>
<p><img src="boost_your_score_within_SECs/SVC_powered_by_CNN_generic.png" alt="SEC Model Architecture"></p>
<p>Fig. 1 SEC Model Architecture</p>
</blockquote>
<h2>Fashion-MNIST</h2>
<p><a href="https://github.com/zalandoresearch/fashion-mnist">Fashion-MNIST</a> is a dataset of a 70,000 clothing articles containing 60,000 training images and 10,000 testing images. Each image in this dataset belongs to one of the following 10 classes</p>
<table>
<thead>
<tr>
<th align="left">Class</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody><tr>
<td align="left">0</td>
<td align="left">T-shirt/top</td>
</tr>
<tr>
<td align="left">1</td>
<td align="left">Trouser</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Pullover</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Dress</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Coat</td>
</tr>
<tr>
<td align="left">5</td>
<td align="left">Sandal</td>
</tr>
<tr>
<td align="left">6</td>
<td align="left">Shirt</td>
</tr>
<tr>
<td align="left">7</td>
<td align="left">Sneaker</td>
</tr>
<tr>
<td align="left">8</td>
<td align="left">Bag</td>
</tr>
<tr>
<td align="left">9</td>
<td align="left">Ankle boot</td>
</tr>
</tbody></table>
<p>This dataset is similar in structure to MNIST and just like MNIST the images in this dataset are also 28x28 pixels. However, unlike MNIST this dataset is better representative of real-world image classification problems. Also, on looking at the benchmark scores it is also clear that CNNs in general perform worse on Fashion-MNIST as compared to MNIST. This fact about the dataset would make it better suited to reveal the bosting potential of combining SVCs with CNNs.</p>
<blockquote>
<p><img src="boost_your_score_within_SECs/FashionMNIST_sample.png" alt="Sample Images from Fashion-MNIST"></p>
<p>Fig. 2 Sample Images from Fashion-MNIST</p>
</blockquote>
<h2>Model</h2>
<h3>CNN</h3>
<p>The CNN model built had the following layers</p>
<ul>
<li>CNN Part<ul>
<li>2D Convolution Layer<ul>
<li>Kernel size=4, Stride=2</li>
<li>channel=1, Out channel=32</li>
</ul>
</li>
<li>ReLU Layer</li>
<li>MaxPool Layer<ul>
<li>Kernel size=4, Padding=1</li>
</ul>
</li>
<li>Flatten Layer</li>
<li>Linear Layer 800x10</li>
<li>ReLU Layer</li>
</ul>
</li>
</ul>
<ul>
<li>Terminal Part<ul>
<li>Linear Layer 10x10</li>
<li>ReLU Layer</li>
</ul>
</li>
</ul>
<h3>SVC</h3>
<p>The SVC had a Linear Kernel with a C value of 1.0, and it resolved multiple classes with a one-vs-rest approach. The Linear Kernel was chosen to keep the complexity of the SVC comparable to the complexity of the Terminal Part of the CNN. I later also tried using an RBF kernel to check whether that using a more powerful kernel would lead to better boosting.</p>
<h2>Results</h2>
<p>After training the CNN for 12 epochs and tracking the testing accuracy of the CNN by itself and after boosting by SVC its seen that the SVC is able to boost the CNN early on in training during its initial epochs (0-9) but then the CNN is able to catch up in epochs (10-12). This makes sense given that both the terminal part of the CNN and LinearSVC are using linear equations with 10 parameters and a bias. The only difference is the CNN interprets the results of that polynomial after passing it through the softmax activation and the SVC uses the polynomial to determine which side of the hyperplane the sample is on.</p>
<blockquote>
<p><img src="boost_your_score_within_SECs/CNN_vs_LinearSEC_noTrans.png" alt="Accuracies from CNN vs SVC"></p>
<p>Fig. 3 Accuracies from CNN vs SVC</p>
</blockquote>
<p>After the last epoch the model was boosted using an RBF SVC since if the CNN had indeed caught up because both the CNN and Linear SVC use linear equations with 10 parameters, then it should not have been able to catch up to a more complex kernel.</p>
<blockquote>
<table>
<thead>
<tr>
<th align="left">Plain CNN</th>
<th align="left">Linear SVC</th>
<th align="left">RBF SVC</th>
</tr>
</thead>
<tbody><tr>
<td align="left">82%</td>
<td align="left">82%</td>
<td align="left">85%</td>
</tr>
</tbody></table>
<p>Table 1 Final Accuracies after 12 Epochs</p>
</blockquote>
<p>And indeed, that is what was found. A nonlinear kernel like RBF is still able to boost the accuracy of the CNN by at least 3%.</p>
<h2>Second Experiment</h2>
<p><strong>Hypothesis</strong>: Even after the CNN catches up to the accuracy boost from a Linear SVC it will have trouble catching up to a boost provided by an SVC with a Non-Linear kernel.</p>
<p>To test my hypothesis that a non-linear kernel should still be able to boost the CNN after it catches up to the Linear kernel boosted SVC, I repeated the experiment and tracked the accuracies of a polynomial kernel boosted SVC and an RBF kernel boosted SVC. However, fitting an additional 2 SVCs after the Linear SVC after every epoch began to slow down the whole training process a lot. So, I shrunk the training set to only 10,000 samples from 60,000 samples to speed up the training process.</p>
<blockquote>
<p><img src="boost_your_score_within_SECs/CNN_vs_Linear_Poly_RBF_SEC_noTrans.png" alt="Accuracies CNN, Linear SVC, and Non-Linear SVC"></p>
<p>Fig. 4 Accuracies CNN, Linear SVC, and Non-Linear SVCs</p>
</blockquote>
<p>This plot almost seems to confirm the hypothesis because around after 5th epoch the all the accuracies flatline and the CNN is no longer able to catch up to the boost provided by the Polynomial or RBF kernel SVC. Another curious observation is that the Linear SVC almost seems to act as an indicator on when the CNN has likely reached the highest accuracy that it can reach. This is true even in Fig.3 where despite it looking like the CNN accuracy would flatline at ~70% accuracy, it is able to catch up the boosted accuracy from the Linear SVC.</p>
<p>Also, just to confirm that there is no overfitting which is preventing the CNN accuracy from increasing Fig.5 shows a plot of the training and testing loss from training the CNN. (Training loss is the loss after every batch while Testing loss is loss after every epoch)</p>
<blockquote>
<p><img src="boost_your_score_within_SECs/CNN_loss_noTrans.png" alt="Loss from Training the CNN"></p>
<p>Fig. 5 Loss from Training the CNN</p>
</blockquote>
<h2>Conclusion</h2>
<p>Support Vector Classifiers are already considered a powerful tool in boosting accuracy through stacking ensembles, but they appear to be capable of more. It appears that Non-Linear SVCs can simply be plugged after a trained CNN to boost its accuracies. Even Linear SVCs which lose their boosting power after a few well-trained epochs are able to provide a respectable boost in the early epochs of training. This could allow you to just train less and boost with a Linear SVC as opposed to training more to catch up to the boosted performance from a Linear SEC. Also, it kinda looks like the CNN catching up to Linear SEC could acts like a stopping criteria.</p>
<h2>Future Work</h2>
<p>In this project I had the SVC trained on the exact same amount of data as the CNN. It would be curious to see how the boosting effect of the SVC varies with the amount of data used to train the SVC</p>
<ul>
<li>What fraction of the CNN training data would be needed to be shown to the SVC for it to match the baseline CNN?</li>
<li>Does the performance for the SVC Boost scale logarithmically, linearly, polynomially, or exponentially with the fraction of training data shown to it?</li>
</ul>
<p>Also in this project I trained the CNN and applied the SVC boost to it myself. If this technique is really valid it should be able to boost the performance of some of the other benchmarks listed on Fashin-MNIST README page. Testing that would be another thing I want to try out.</p>
