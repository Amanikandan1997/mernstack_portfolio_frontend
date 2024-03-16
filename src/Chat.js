import React from 'react'
import ChatBot from 'react-simple-chatbot';
import manicv from "./assests/assets/pdf/mani cv.pdf"
import { ThemeProvider } from 'styled-components';
import DP from "./assests/perfil.png"
import { UnorderedList, ListItem, Link, Text, Box ,Heading} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function Chat() {

    const theme = {
        background: '#f5f8fb',
        botAvatar:"https://amanikandan1997.github.io/ReactJs_Portfolio/static/media/perfil.cf3c574335dd6f9dd291.png",
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      const projects = [
        {
          name: 'TransCloud Language Services',
          description: ' project for TCLS . Created a website showcasing Tanslation  services.',
          link: 'http://www.transcloudservices.com',
        },
        {
          name: 'Surabhi Construction',
          description: ' project for Surabhi Construction. Created a website showcasing Construction.',
          link: 'https://abhisurabhi.com',
        },
        {
          name: 'Kite Career Website',
          description: ' project for KiteCareer Website. ',
          link: 'https://kitecareer.com/',
        },
        {
          name: 'Grafin Delivery (quaentNutrision)',
          description: ' project for Grafin Delivery (quaentNutrision) E-commerce Website ',
          link: 'https://grafin.online',
        },
        {
          name: 'KalaiMarketing',
          description: 'Created a KBM to showcase MLM Project UI with responsive design.',
          link: 'https://kalaimarketing.com',
        },
        {
          name: 'Marthandam WeatherMan App',
          description: 'Created a KBM to showcase MLM Project UI with responsive design.',
          link: 'https://amanikandan1997.github.io/Manikandan_uki_weatherManapp/',
        },
        {
          name: 'DSR Construction',
          description: ' project for DSR Construction. Created a website showcasing Construction Bussiness.',
          link: 'https://dsrconstruction.net',
        },
        {
          name: 'QR Code Generator',
          description: ' project for Qr code generator. ',
          link: 'https://amanikandan1997.github.io/Qr-Code-Generate/',
        },
        {
          name: 'Currency Convertor',
          description: ' project for Currency Convertor. ',
          link: 'https://amanikandan1997.github.io/Currency_Converter_Reactjs/',
        },
        {
          name: 'BHima Jwellery workshop',
          description: ' project for Bhima jwellery workshop. ',
          link: 'https://amanikandan1997.github.io/Jewellery_static/',
        },
        {
          name: 'MtM Mart',
          description: ' project for Mtm Mart Mini e-commerce. ',
          link: 'https://amanikandan1997.github.io/mini-e-commerce/',
        },
      ];
      
      
    
      const projectList = projects.map((project, index) => (
        <ListItem key={index} mb={4}>
        <Text fontWeight="bold">{project.name}</Text>
        <Text>{project.description}</Text>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" color="#1da1f2">
          View Project
        </Link>
      </ListItem>
    ));
    const projects1 = [
      {
        name: 'Marthandam Honey Product Design',
        description: ' project for Marthandam Honey Product Design 100% pure Honey',
        link: "https://www.instagram.com/p/CyGLhGry1kH/?igshid=MzRlODBiNWFlZA==",
      },
      {
        name: 'Cape Comorin Awards Stage Design Mockup',
        description: 'Cape Comorin Awards Stage Design Mockup',
        link: "https://www.instagram.com/p/Cxd-LGIyn8O/?igshid=MzRlODBiNWFlZA==",
      },
      {
        name: 'Cape Comorin Awards Stage Design Mockup',
        description: 'Cape Comorin Awards Stage Design Mockup',
        link: "https://www.instagram.com/p/Cxd-LGIyn8O/?igshid=MzRlODBiNWFlZA==",
      },
      {
        name: 'Kanniyakumari Creative Poster Design',
        description: 'Kanniyakumari Creative Poster Design',
        link: "https://www.instagram.com/p/CxkZvt5r3kS/?igshid=NjIwNzIyMDk2Mg==",
      },
      {
        name: 'Sunfeast Sachin & Chandramuki card re Design',
        description: 'Sunfeast Sachin & Chandramuki card re Design 90s memory',
        link: "https://www.instagram.com/p/Cu9cYePNYX7/?igshid=NjIwNzIyMDk2Mg==",
      },
      {
        name: 'Aadhiyugam Book Cover Design',
        description: 'Aadhiyugam Book Cover Design',
        link: "https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_new-book-coverdesign-work-edit-manikandan-activity-7154875581120106496-VACn?utm_source=share&utm_medium=member_desktop",
      },
      {
        name: 'MTM Chips Product Design',
        description: 'Marthandam Chips Product Design',
        link: "#",
      },
      {
        name: 'Porkalam Rap Song Poster Design',
        description: 'Porkalam Rap Song Poster Design',
        link: "https://www.instagram.com/p/C3o-QC2N1Ye/?igsh=d2JpOGE2bHdmMnZ3",
      },
      {
        name: '90s AAsai Mittai RE Design',
        description: '90s AAsai Mittai RE Design',
        link: "#",
      },
      {
        name: 'Easy 2 cooking Logo Designn',
        description: 'Ec2 Logo Design',
        link: "https://www.instagram.com/p/CwFz3qcyQ73/?igshid=MzRlODBiNWFlZA==",
      },
     
    ];
    
    
  
    const projectList1 = projects1.map((projects1, index) => (
      <ListItem key={index} mb={4}>
      <Text fontWeight="bold">{projects1.name}</Text>
      <Text>{projects1.description}</Text>
      <Link href={projects1.link} target="_blank" rel="noopener noreferrer" color="#1da1f2">
        View Project
      </Link>
    </ListItem>
  ));
    const LinkedInMessage = (props) => (
      <Box>
        <Text>You can reach out to me and connect with me on LinkedIn:</Text>
        <Heading as='h3' size='lg'>Manikandan A</Heading>
        <Link href="https://www.linkedin.com/in/manikandan-arunachalam-2b0803262/" target="_blank" rel="noopener noreferrer" color="#1da1f2">
          LinkedIn   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>
        </Link>
        <br />
        <Link href="mailto:manikandanarunachalam913@gmail.com" color="#1da1f2">
          Email <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#4285F4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"/><path fill="#34A853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"/><path fill="#FBBC04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"/><path fill="#EA4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"/><path fill="#C5221F" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"/></g></svg>
        </Link>
      </Box>
    );
    
    const ResumeDownload = () => (
      <Box>
        <Text>You can download my resume here:</Text>
        <Link  href={manicv} 
        download
        color="#1da1f2"
        fontWeight="bold"
        textDecoration="none"
        _hover={{ textDecoration: 'underline' }}
        _focus={{ outline: 'none' }}>
          Download Resume
        </Link>
      </Box>
    );
    
    const FAQSection = () => (
      <Box>
        <Text fontWeight="bold" mb={4}>Here are some frequently asked questions:</Text>
        <UnorderedList>
          <ListItem>
            <Link onClick={() => handleAnswer('webDeveloper')}>
              What is your experience as a web developer?
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => handleAnswer('finalYear')}>
              What are you currently studying?
            </Link>
          </ListItem>
          {/* Add more FAQ questions here if needed */}
        </UnorderedList>
      </Box>
    );
    
    const handleAnswer = (value, previousStep) => {
      switch (value) {
        case 'webDeveloper':
          return {
            id: 'webDeveloperAnswer',
            message: 'As a web developer, I have experience with frontend technologies such as HTML, CSS, JavaScript, React,  and more.',
            trigger: 'faqList',
          };
        case 'finalYear':
          return {
            id: 'finalYearAnswer',
            message: 'I am currently in my final year of studying Bachelor of computer Application(BCA) ',
            trigger: 'faqList',
          };
        // Add more cases for other FAQ questions if needed
        default:
          break;
      }
    };
  return (
    <ThemeProvider theme={theme}>
      
    <ChatBot
    headerTitle="Manikandan Arunachalam"
      speechSynthesis={{ enable: true, lang: 'en' }}
      recognitionEnable={true}
    steps={[
      {
        id: 'welcome',
        message: '👋Hi Iam Manikandan Welcome to my portfolio chatbot! How can I assist you today?',
        trigger: 'options',
      },
     
      {
        id: 'options',
        message: 'Here are some things you can do:',
        trigger: 'optionsList',
      },
      {
        id: 'optionsList',
        options: [
          { value: 'portfolio', label: 'View my portfolio projects', trigger: 'portfolio' },
          { value: 'Graphic design', label: 'View my graphic design projects', trigger: 'portfolio1' },
          { value: 'contact', label: 'Get in touch with me', trigger: 'contact' },
          { value: 'resume', label: 'Download my resume', trigger: 'resume' },
          { value: 'faq', label: 'Read FAQs', trigger: 'faq' },
          { value: 'bye', label: 'That\'s it for now. Goodbye!', trigger: 'end' },
        ],
      },
      {
        id: 'portfolio',
        message: 'Here are some of my portfolio projects:',
        trigger: 'portfolioList',
      },
      // Define your portfolio projects list here
      {
          id: 'portfolioList',
          component: (
            <UnorderedList>
              {projectList}
              </UnorderedList>
          ),
          trigger: 'options',
        },
        {
          id: 'portfolio1',
          message: 'Here are some of my graphic design projects:',
          trigger: 'portfolioList1',
        },
        // Define your portfolio projects list here
        {
            id: 'portfolioList1',
            component: (
              <UnorderedList>
                {projectList1}
                </UnorderedList>
            ),
            trigger: 'options',
          },
      {
        id: 'contact',
        component: <LinkedInMessage />,
        trigger: 'options',
      },
      {
        id: 'resume',
        component: (<ResumeDownload />),
        trigger: 'options',
      },
      {
        id: 'faq',
        message: 'Here are some frequently asked questions:',
        trigger: 'faqList',
      },
      // Define your FAQs list here
        {
          id: 'faqList',
          options: [
            { value: 'webDeveloper', label: 'What is your experience as a web developer?', trigger: 'webDeveloperAnswer' },
            { value: 'graphicdesign', label: 'What is your experience as a graphicdesigner?', trigger: 'graphicAnswer' },
            { value: 'finalYear', label: 'what are you education qualification?', trigger: 'finalYearAnswer' },
            { value: 'dsaAlgo', label: 'What are you currently preparing for?', trigger: 'currently' },
            { value: 'back', label: 'Back to main menu', trigger: 'options' },
          ],
        },
        {
          id: 'webDeveloperAnswer',
          message: 'As a web developer, I have experience with frontend technologies such as HTML, CSS, Bootstrap , JavaScript, React js ,Materia UI chakra UI .',
          trigger: 'faqList',
        },
        {
          id: 'graphicAnswer',
          message: 'As a Graphic Designer , I have experience with  Photoshop, illustartor(basic), Aftereffect(basic) , flimora, VN editor .',
          trigger: 'faqList',
        },
        {
          id: 'finalYearAnswer',
          message: 'Iam Completed Diplomo Mechanical Engineering in 2016  Then I have Completed BCA in 2023 Madras University.',
          trigger: 'faqList',
        },
        {
          id: 'currently',
          message: 'I am currently preparing for React Js ,React Native to improve my problem-solving skills,and i have learning Adobe illustrator',
          trigger: 'faqList',
        },
      {
        id: 'end',
        message: `
        Thank you for visiting my portfolio chatbot! 
        Feel free to explore more or get in touch with me anytime.
        If you have any inquiries about freelance work, don't hesitate to ask.
        Goodbye and have a great day!
        `,
        end: true,
      },
          
         
        ]}
        
       
        floating={true}
  />
  </ThemeProvider>
  )
}

export default Chat