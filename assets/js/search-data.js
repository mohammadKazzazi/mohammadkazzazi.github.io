// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal and conference papers, newest first. Click a badge or button for the abstract, BibTeX, or the paper itself.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research, privacy, and hardware projects. Most of them have code on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, publications, teaching, and skills. Two PDF versions are available below, tailored to different audiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching assistant roles at Sharif University of Technology, 2022–2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-paper-enhancing-skin-cancer-diagnosis-using-late-discrete-wavelet-transform-and-new-swarm-based-optimizers-was-accepted-in-machine-learning-with-applications",
          title: 'Our paper, Enhancing skin cancer diagnosis using late discrete wavelet transform and new...',
          description: "",
          section: "News",},{id: "news-accepted-to-the-m-sc-in-electrical-and-electronic-engineering-at-epfl",
          title: 'Accepted to the M.Sc. in Electrical and Electronic Engineering at EPFL.',
          description: "",
          section: "News",},{id: "news-our-paper-distilling-vision-language-models-for-on-device-fire-understanding-is-now-on-arxiv",
          title: 'Our paper, Distilling Vision-Language Models for On-Device Fire Understanding, is now on arXiv....',
          description: "",
          section: "News",},{id: "news-started-my-m-sc-in-electrical-engineering-at-epfl-in-lausanne-switzerland",
          title: 'Started my M.Sc. in Electrical Engineering at EPFL in Lausanne. :switzerland:',
          description: "",
          section: "News",},{id: "projects-football-object-detection-and-tracking",
          title: 'Football Object Detection and Tracking',
          description: "YOLOv8 detection with ByteTrack, DeepSORT, and CSRT tracking on SportsMOT football video.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/football-tracking/";
            },},{id: "projects-hardware-and-parallel-computing",
          title: 'Hardware and Parallel Computing',
          description: "FPGA, CUDA, and digital systems projects spanning CORDIC, FFT, a MIPS processor, and GPU memory.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hardware-systems/";
            },},{id: "projects-machine-unlearning-and-private-training",
          title: 'Machine Unlearning and Private Training',
          description: "SISA sharded training on CIFAR-10, then checking that forgotten samples are actually gone.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/machine-unlearning/";
            },},{id: "projects-membership-inference-attacks-against-diffusion-models",
          title: 'Membership Inference Attacks Against Diffusion Models',
          description: "A hyperparameter-free variant of SecMI that fuses several denoising timesteps instead of picking one by hand.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/membership-inference/";
            },},{id: "projects-distilling-vlms-for-on-device-fire-understanding",
          title: 'Distilling VLMs for On-Device Fire Understanding',
          description: "Compressing a 7B vision-language model 14× so it can reason about fire scenes on an embedded sensor.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vlm-distillation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6D%6F%68%61%6D%6D%61%64%6F%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohammad-kazzazi-99a39a248", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohammadKazzazi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2p2DYSQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
