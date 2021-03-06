
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Swati Mishra",
  title: "Hi all, I'm Swati",
  subTitle: emoji("A passionate,outgoing and detail oriented Engineer with 7 years of experience in Big Data Analytics, Machine Learning and Data Science domain."),
  resumeLink: "https://drive.google.com/file/d/1h_z7oDXBgKkTJxXZBQ_l31uS7dMvwB9Q/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/swatisignature",
  linkedin: "https://www.linkedin.com/in/swatisignature/",
  gmail: "swatimishra.puri@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "My Roles and Responsibilities",
  subTitle: "Technical Skills",
  skills: [
    emoji("⚡ Exploratory Data Analysis & Feature Engineering"),
	emoji("⚡ Predictive Analysis"),
	emoji("⚡ Data Visualization"),
    emoji("⚡ Machine Learning model buildings- Regressions, Classifications, Clustering and Neural Networks"),
    emoji("⚡ Data Ingestion"),
	emoji("⚡ Data Enrichment and Aggregations"),
	emoji("⚡ Data Analytics"),
	emoji("⚡ Automation Framework design and development"),
	emoji("⚡ Team and task Management")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SQL"
    },
    {
      skillName: "Python"
    },
	{
      skillName: "scikit-learn"
    },
	{
      skillName: "Hadoop"
    },
	{
      skillName: "Spark-Pyspark"
    },
	{
      skillName: "Google Cloud Platform"
    },
	{
      skillName: "Amazon Web Service"
    },
	{
      skillName: "Seaborn"
    },
	{
      skillName: "matplotlib"
    },
	{
      skillName: "Unix-Shell"
    },
	{
      skillName: "Hive"
    },
	{
      skillName: "Oozie and Ctrl-M"
    },
	{
      skillName: "Autosys"
    },
	{
      skillName: "Sqoop"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Post Graduate in AI and Machine Learning, NIT Warangal, 2019-2020",  //Insert stack or technology you have experience in
      //progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "B.Tech in Electrical and Electronics Engineering, NIST, 2009-2013",
      //progressPercentage: "70%"
    },
    {
      Stack: "Class XII, Kendriya Vidyalaya, 2009",
      //progressPercentage: "60%"
    },
	{
      Stack: "Class X, Kendriya Vidyalaya, 2007",
      //progressPercentage: "60%"
    }
  ]
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",  
      company: "HSBC India Pvt. Ltd.",
      companylogo: require("./assets/images/hsbc.png"),
      date: "April 2019 – Oct 2019"
      /*desc: "Leading the team on Banking Fraud Analytics and Predictions.",
      descBullets: [
        "Designed and developed framework to analyze crucial datasets like TRANSACTIONS, CUSTOMERS, and ACCOUNTS that the bank deals with on a day-to-day basis and grouping them into various LOBs and analyzing the data with Rules set to check various parameters, consistency and correctness of the data.",
        "Reporting the suspected Fraud data and tracking the Anti-Money laundering and tracking sanctioned framework and doing the risk rating for customers for which we receive the data on day to day basis."
	"Built Machine Learning models to predict fraud Transaction cases, Customer's risk rating and Account churns and monitoring."
	"Leading the Scrum team by Requirement gathering, Sprint planning, user story building session, Design and development of framework mentoring the team and code evaluation till the go-live of the project."
      ]*/
    },
    {
      role: "Application Engineer",   
      company: "Oracle India Pvt. Ltd",
      companylogo: require("./assets/images/oracle.png"),
      date: "Dec 2017 – Mar 2019"
      /*desc: "Automation framework design and developement",
      descBullets: [
        "Designed and Built framework to enable automation of various Environment patching and code deployment."
        "Designed architecture to deal with every data entry done and scrutinizing the data for its consistency."
	"Automation of DB changes migration using utility Upatch."
      ]*/
    },
    {
      role: "Technology Analyst - Infosys",  
      company: "Apple",
      companylogo: require("./assets/images/applelogo.png"),
      date: "Oct 2013 – Dec 2017"
	/*  desc: "Analyzing data of apple music stores data for all the users and their activities being performed on iTunes like songs, app’s, videos and all the content’s information along with user’s transaction information and process using Hadoop and Big data technologies to understand overall usages of iTunes and iRadio application",
      descBullets: [
        "Developed various aggregates on content and transaction data of user to provide usages of iTunes application",
        "Data optimization, Performance improvement, designing scalable application for further business analysis",
	"Built Data quality and management framework to ensure the quality of data at the time of enrichment",
	"Developed Framework for automation of Teradata loading from Hadoop with great improvement in the runtime, more than 60% time reduced",
	"Mentoring the team members and guiding as part of peer-review and code standard improvement"
      ]*/
      },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

/*const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "swatisignature", //your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};*/


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Certifications",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/swati_csm.webp"),
      link: "https://drive.google.com/file/d/1rV5oc5wYQCiMQvcuLAhwscQjFFeQ5DcZ/view?usp=sharing"
    },
	{
      image: require("./assets/images/gcp.webp"),
      link: "https://drive.google.com/file/d/1SIqByyCiwUbObsSu3QSDw9Geegd_0rB2/view?usp=sharing"
    },
    {
      image: require("./assets/images/cambridge_bec.webp"),
      link: "https://www.linkedin.com/school/university-of-cambridge/"
    }

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects"),
  subtitle: "Machine Learning Projects and Some Cool Stuff that I have done !",

  achivementsCards: [
	  {
      title: "Credit Card Fraud Detection",
      subtitle: "Banks and Finance Organization wants to be able to recognize fraudulent credit card transactions",
      image: require("./assets/images/credit_card_fraud.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/ML_Projects/tree/master/Credit_Card_Fraud_Detection" },
        { name: "Kaggle", url: "https://www.kaggle.com/mlg-ulb/creditcardfraud" }
      ]
    },
	{
      title: "Dog or Cat Image Classification",
      subtitle: "Given an image classify its a Dog or Cat",
      image: require("./assets/images/dog_vs_cat.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/Deep_Learning/blob/master/Hands_On/CNN/Binary_Classifcation_CNN.ipynb" },
        { name: "Kaggle", url: "https://www.kaggle.com/c/dogs-vs-cats" }
      ]
    },
    {
      title: "Black Friday Sale",
      subtitle: "Retail Companies to understand the customer purchase behaviour (specifically, purchase amount) against various products of different categories and predict the purchase price.",
      image: require("./assets/images/blackfriday.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/ML_Projects/tree/master/Black_Friday_Prediction" },
        { name: "Kaggle", url: "https://www.kaggle.com/sdolezel/black-friday" }
      ]
    },
    {
      title: "Health Insurance Cost",
      subtitle: "Health Insuarnce companyies wants to understand the pattern to estimate the correct health insurance amount for population using old data.",
      image: require("./assets/images/health_insurance.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/ML_Projects/tree/master/Medical_Insurance_Cost" },
        { name: "Kaggle", url: "https://www.kaggle.com/mirichoi0218/insurance" }
      ]
    },
    {
      title: "ML in Agriculture",
      subtitle: "Farmers wants to understand the chances of Crop damage so that they can take necessary action.",
      image: require("./assets/images/ml_av.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/ML_Projects/tree/master/ML_in_Agriculture" },
        { name: "Analytics_Vidhya Hackathon", url: "https://datahack.analyticsvidhya.com/contest/janatahack-machine-learning-in-agriculture/#ProblemStatement" }
      ]
    },
    {
      title: "IMDB Review Classification",
      subtitle: "Binary sentiment classification of movies based on IMDB reviews.",
      image: require("./assets/images/imdb.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/Deep_Learning/blob/master/Hands_On/RNN/IMDB_Review_Classification_Keras.ipynb" },
        { name: "Kaggle", url: "https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews" }
      ]
    },
    {
      title: "Fashion MNIST",
      subtitle: "Classifying Fashion Items",
      image: require("./assets/images/fashion_MNIST.webp"),
      footerLink: [
        { name: "git", url: "https://github.com/SWATISIGNATURE/Deep_Learning/blob/master/Hands_On/Multi_Layer_Percepton/MNIST_MLP_using_Keras.ipynb" },
        { name: "Kaggle", url: "https://www.kaggle.com/zalando-research/fashionmnist" }
      ]
    },
    
  ]
};

// Blogs Section

/*const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};*/

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(313)-455-7937",
  email_address: "swatimishra.puri@gmail.com"
};

//Twitter Section

/*const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};*/
export { greeting, socialMediaLinks, skillsSection, techStack, bigProjects, workExperiences, achievementSection, contactInfo};
