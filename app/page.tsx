"use client";
import { Definition } from "@/components/definition";
import NaturalSelection from "@/components/naturalselection";
import EnviormentalImpact from "@/components/enviromentalimpact";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Markdown from "react-markdown";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Labelling from "@/components/labelling";
import { PublicOpinion } from "@/components/publicopinion";
import Allergies from "@/components/allergies";
import DNA from "@/components/dna";
import Insulin from "@/components/insulin";
import { Controversy } from "@/components/controversy";
import Safety from "@/components/safety";

const inter = Inter({ subsets: ["latin"] });

const slides = [
  {
    title: (
      <>
        Doubloons Explained{" "}
        <Image
          className="inline"
          src="https://highseas.hackclub.com/doubloon.svg"
          width={40}
          height={40}
          alt="Doubloon"
        />
      </>
    ),
    description: `Welcome! This is an interactive website on doubloons. In this website you'll:
* Learn What Doubloons Are.
* Learn how can you earn Doubloons.
* What are pro's and con's of creating a project.
* Does more time equals more Doubloons ?.
* And more!

**Press the Start button to begin!**`,
    component: (
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Text that says 'Doubloons Explained' and under it a copyright for OC 2024"
      />
    ),
  },
  // {
  //   title: "Introduction",
  //   description: `* Humans have been modifying plants and animals for thousands of years! They have been doing this through **natural selection and selective breeding**
  //   * Natural Selction is when animals or plants choose other organisms that are better and over time, creating a better species
  //   * Selective Breeding is where humans choose two organisms with desirable traits and breed them together.
  //     * We have been doing selective breeding since 8000 BCE`,
  //   component: <NaturalSelection />,
  // },
  {
    title: "Definition",
    description: `Let's first start by defining what a Doubloon is. 
* In simple terms, a doubloon is a gold coin which was used for payment in the Spanish Empire.
* But why is it used in high seas (hackclub event) ?
* And how can you earn it?
* Let's find out!`,
    component: (
      <Definition
        term="Doubloons"
        definition=" The doubloon was a two-escudo Spanish gold coin worth approximately $4  or 32 reales, and weighing 6.766 grams of 22-karat gold. "
      />
    ),
  },
  {
    title: "Using Doubloons in High Seas",
    description: `At the start of the [High Seas](https://highseas.hackclub.com), we started looking for some digital currency to pay for our projects. 
* As the complete high seas is **Pirate themed** as we sail ships and get paid, we thought that a coin would be a good idea.
  * Then as a result we started looking for a something that can be used.  
* If you have seen the [Pirates of the Caribbean](https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean_(film_series)) Gold Coins (Doubloons then) were used. 
  * The currency that was used is Doubloons and we started using it in High Seas.`,
    component: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ORnJFIxEeHQ?autoplay=1&controls=0&disablekb=1&fs=0&color=white&modestbranding=1"
        allow="autoplay; encrypted-media"
        className="rounded-lg"
      />
    ),
  },
  {
    title: "A little info about Doubloons",
    description: `You can read more about the image [by clicking here](https://www.vocabulary.com/dictionary/doubloon).

**So how can you earn them in high seas?**`,
    component: (
      <Image
        src="/info.png"
        width={700}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-lg"
      />
    ),
  },
  {
    title: "How to earn Doubloons in High ? ",
    description: `To earn doubloons the rule is simple **Create and Ship projects**.

* You need to code something awesome while tracking the time you spend coding.
* After that ship it on the [High Seas website](https://highseas.hackclub.com). 
* Your project then will go into battles and peers will vote for or against it.
* Your project will get doubloons based on the votes it gets ranging from **5 to 27 doubloons per hour of your work**.

***So does more hours  equals more doubloons ?***`,
    component: (
      <Image
        src="/ship.png"
        width={600}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-3xl"
      />
    ),
  },
  {
    title: "Does more hours equals more Doubloons ?",
    description: `Now you know how you get doubloons you might think that more hours equals more doubloons. 
    
Here's **a little proof of why that is not true**.
  
    Let's say you spend 10 hours coding but the tracker only tracked
    for 5 hours of your work. So now your project will go in the 
    wonderdome and it will go against project with similar time. Next
    as peers will start voting for your project our project will 
    perform well than other projects.

    So in this case you will get more doubloons than you would have 
    due to the positive numbers of votes your project has got.

Is the condition also true for reverse situations?`,
    component: <Safety />,
  },
  {
    title: "Is the condition also true for reverse situations?",
    description: `Yes, It is also true for reverse situations.
    
    Let's say you spend 5 hours coding but you have additionally selected 
    another project you have worked on before. So the total time you have 
    for the project is 10 hours (while you have only spent 5 hours). 
    
    Now as your project will go into the wonderdome it will get fewer 
    votes as it will be against the project with 10 hours of coding and
    your project only has 5 hours of codework. 
    
    This will result in less votes for your project and as a result 
    less doubloons. 

Beside is a image of doubloons Hridya Agrawal got for 2 of his projects! `,
    component: (
      <Image
        src="/reward.png"
        width={600}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-lg"
      />
    ),
  },
  {
    title: "Then how the hell I can earn the maximum amount of doubloons?",
    description: `Well **if more hours != more doubloons** there is one thing if you got it more then you will get more doubloons.

- More votes definitely means more doubloons.`,
    component: <Allergies />,
  },
  {
    title: "Allerigies",
    description: `Another big concern is that GMOs can cause allergies.
* This is actually **false**! According to the FDA, GMO foods are no more likely to cause allergies than non-GMOs.
* GMOs are tested for allergens before they can be sold!
* So, actually GMOs don't cause allergies!`,
    // component: <Allergies />,
  },
  //   {
  //     title: "Labeling",
  //     description: `One of the biggest controversies around GMOs are if they should be labeled or not.
  // * Some people think that they should know if they are eating a GM product.
  // * And with GM products on a rise (check the chart on the left!), it's becoming more and more hard to know if your food is gentically modified.
  // * Thankfully as of 2022, we have the [The National Bioengineered Food Disclosure Standard](https://www.ams.usda.gov/rules-regulations/be) which regulates the labeling of GM products.
  // * This means every GM product must be labeled as such.
  // * But is this enough?`,
  //     component: <Labelling />,
  //   },
  //   {
  //     title: "Public Opinion",
  //     description: `Public's opinion on GMOs are mixed.
  // * A survey conducted by Pew Research Center in 2016 (see left) found that 27% of americans buy Non-GMO products
  // * This means that people **really** care about what they are eating!
  // * So labeling is a big deal for them. They want to know if they are eating a GM product or not.`,
  //     component: <PublicOpinion />,
  //   },
  {
    title: "Conclusion",
    description: `Thanks for reading this interactive lesson on Doubloons.

**Now go and make some super cool projects!**
`,
    component: <></>,
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div
        className={`lg:hidden flex items-center justify-center h-screen text-center ${inter.className}`}
      >
        GMOs Explained! is not optimized for mobile. Please view on a desktop.
        (sorry it{"'"}s inconvenient but I promise it{"'"}s worth it!)!
      </div>
      <div className={`hidden lg:block p-20 ${inter.className}`}>
        <div className="flex gap-4">
          <div className="prose flex-1 rounded-xl p-5 h-24 md:h-48 lg:h-[35rem] flex flex-col justify-center relative">
            <Progress
              value={(currentSlide / (slides.length - 1)) * 100}
              className="w-24 h-1"
            />
            <h1 className="font-bold text-xl pt-5">
              {slides[currentSlide].title}
            </h1>
            <div className="pb-5">
              <Markdown>{slides[currentSlide].description}</Markdown>
            </div>
            <div>
              {currentSlide !== 0 ? (
                <Button
                  onClick={() => setCurrentSlide((prev) => prev - 1)}
                  className="w-20 bg-white text-slate-700 border border-slate-700 hover:bg-slate-300"
                >
                  Back
                </Button>
              ) : null}
              <span className="px-2" />
              {currentSlide !== slides.length - 1 && (
                <Button onClick={nextSlide} className="w-20">
                  {currentSlide === 0 ? "Start" : "Next"}
                </Button>
              )}
            </div>
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-5 flex justify-center items-center">
            {slides[currentSlide].component}
          </div>
        </div>
      </div>
    </>
  );
}
