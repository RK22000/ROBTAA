Support Vector Classifier (SVC) is a cool technique to classify stuff but I haven't seen it be used for image classification. In this post I'm writing about my experiment to classify images using an SVC by preprocessing the images using a CNN.

### The Problem

SVCs are a cool idea but I haven't seen a nice way to use it for image classification.

I've heard Support Vector Classifiers (SVCs) are really good at classifying data made up of distinct values, but building up an SVC gets much harder as the number of values in each data point increases. So classifying data that looks like [a, b, c, ..., x, y, z] is going to be much harder than classifying data that looks like [a, b, c]. For this reason its kinda unreasonable to use an SVC to classify images. An image just has too many data points (in pixel values) for an SVC to consider.

### The Idea

What if the image is passed through a CNN that compresses the image into just a few data points? Would an SVC actually be able to classify the image based on those data points?

### The Experiment

My project team from ML club is working with a [huge dataset](https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images) of images of breast cancer tissue samples. Each image is labeled as either `Cancerous` or `Benign`. So I built, trained, and tested a simple CNN on the images in that dataset. I then created another dataset by passing each image through the trained model up until the second last layer which had 10 nodes. I then used this dataset to build, train, and test an SVC.

The experiment looked something like this
![The experiment diagram](enhancing_cnns_using_svc/SVC_powered_by_CNN.png)

### Compromises

The [Breast Cancer Dataset](https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images) has 277,524 images. But I found that the SVC was taking an unreasonably long time to build when I tried to train it with even just 100,000 images. So I limited the training set size to 10,000 images on both the CNN and SVC.

### The Result

After training on 10,000 images the CNN got an accuracy of **81.9%** on a test set of 10,000 images. The SVC got an accuracy of **82.8%**. That's a **0.9%** improvement. I'm not sure if this is just a slight random variation or its indicative of something significant. I was too tired try anything more since I had exhausted all my efforts trying to get the code for everything to work.

|CNN  |SVC
|:----|:--
|81.9%|82.8%

### Method

Its 4AM you can just have a look at my [notebook](https://github.com/RK22000/SVIC/blob/main/Scotty2.ipynb), but here's the gist.

I made the CNN using [PyTorch](https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html)

<div class='not-prose'>

```py
class BC_Classifier(nn.Module):
    def __init__(self):
        super(BC_Classifier, self).__init__()
        self.convo_stack = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels=64, kernel_size=3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(64*4*4, 200),
            nn.ReLU(),
            nn.Linear(200, 10),
            nn.ReLU(),
            nn.Linear(10, 2),
        )

    def forward(self, x):
        x = self.convo_stack(x)
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits
```

</div>

And the SVC using [Sickit Learn](https://scikit-learn.org/stable/modules/svm.html)
