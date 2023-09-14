<h1 class='blog-title'>Enhancing Cnns Using Svcs</h1>
<h2 class='blog-subtitle'>01 Dec 2022</h2>

<p>Support Vector Classifier (SVC) is a cool technique to classify stuff but I haven&#39;t seen it be used for image classification. In this post I&#39;m writing about my experiment to classify images using an SVC by preprocessing the images using a CNN.</p>
<h3>The Problem</h3>
<p>SVCs are a cool idea but I haven&#39;t seen a nice way to use it for image classification.</p>
<p>I&#39;ve heard Support Vector Classifiers (SVCs) are really good at classifying data made up of distinct values, but building up an SVC gets much harder as the number of values in each data point increases. So classifying data that looks like [a, b, c, ..., x, y, z] is going to be much harder than classifying data that looks like [a, b, c]. For this reason its kinda unreasonable to use an SVC to classify images. An image just has too many data points (in pixel values) for an SVC to consider.</p>
<h3>The Idea</h3>
<p>What if the image is passed through a CNN that compresses the image into just a few data points? Would an SVC actually be able to classify the image based on those data points?</p>
<h3>The Experiment</h3>
<p>My project team from ML club is working with a <a href="https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images">huge dataset</a> of images of breast cancer tissue samples. Each image is labeled as either <code>Cancerous</code> or <code>Benign</code>. So I built, trained, and tested a simple CNN on the images in that dataset. I then created another dataset by passing each image through the trained model up until the second last layer which had 10 nodes. I then used this dataset to build, train, and test an SVC.</p>
<p>The experiment looked something like this
<img src="enhancing_cnns_using_svc/SVC_powered_by_CNN.png" alt="The experiment diagram"></p>
<h3>Compromises</h3>
<p>The <a href="https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images">Breast Cancer Dataset</a> has 277,524 images. But I found that the SVC was taking an unreasonably long time to build when I tried to train it with even just 100,000 images. So I limited the training set size to 10,000 images on both the CNN and SVC.</p>
<h3>The Result</h3>
<p>After training on 10,000 images the CNN got an accuracy of <strong>81.9%</strong> on a test set of 10,000 images. The SVC got an accuracy of <strong>82.8%</strong>. That&#39;s a <strong>0.9%</strong> improvement. I&#39;m not sure if this is just a slight random variation or its indicative of something significant. I was too tired try anything more since I had exhausted all my efforts trying to get the code for everything to work.</p>
<table>
<thead>
<tr>
<th align="left">CNN</th>
<th align="left">SVC</th>
</tr>
</thead>
<tbody><tr>
<td align="left">81.9%</td>
<td align="left">82.8%</td>
</tr>
</tbody></table>
<h3>Method</h3>
<p>Its 4AM you can just have a look at my <a href="https://github.com/RK22000/SVIC/blob/main/Scotty2.ipynb">notebook</a>, but here&#39;s the gist.</p>
<p>I made the CNN using <a href="https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html">PyTorch</a></p>
<div class='not-prose'>

<pre><code class="hljs language-py"><span class="hljs-keyword">class</span> <span class="hljs-title class_">BC_Classifier</span>(nn.Module):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self</span>):
        <span class="hljs-built_in">super</span>(BC_Classifier, self).__init__()
        self.convo_stack = nn.Sequential(
            nn.Conv2d(in_channels=<span class="hljs-number">3</span>, out_channels=<span class="hljs-number">64</span>, kernel_size=<span class="hljs-number">3</span>),
            nn.ReLU(),
            nn.MaxPool2d(<span class="hljs-number">2</span>),
            nn.Conv2d(in_channels=<span class="hljs-number">64</span>, out_channels=<span class="hljs-number">64</span>, kernel_size=<span class="hljs-number">3</span>),
            nn.ReLU(),
            nn.MaxPool2d(<span class="hljs-number">2</span>),
            nn.Conv2d(in_channels=<span class="hljs-number">64</span>, out_channels=<span class="hljs-number">64</span>, kernel_size=<span class="hljs-number">3</span>),
            nn.ReLU(),
            nn.MaxPool2d(<span class="hljs-number">2</span>)
        )
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(<span class="hljs-number">64</span>*<span class="hljs-number">4</span>*<span class="hljs-number">4</span>, <span class="hljs-number">200</span>),
            nn.ReLU(),
            nn.Linear(<span class="hljs-number">200</span>, <span class="hljs-number">10</span>),
            nn.ReLU(),
            nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">2</span>),
        )

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, x</span>):
        x = self.convo_stack(x)
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        <span class="hljs-keyword">return</span> logits
</code></pre></div>

<p>And the SVC using <a href="https://scikit-learn.org/stable/modules/svm.html">Sickit Learn</a></p>
