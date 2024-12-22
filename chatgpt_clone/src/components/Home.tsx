import logo from "../assets/chatgptLogo.svg";
import sendIcon from "../assets/send.svg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from 'react';
import axios from 'axios';

interface Conversation {
    question: string;
    answer: string;
  }

function Home() {

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [conversations, setConversations] = useState<Conversation[]>([]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!input.trim()) return; 

        setIsLoading(true);
        setCurrentQuestion(input);
        setCurrentAnswer('');
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/ask?prompt=${input}`);
            setCurrentAnswer(response.data);
            setConversations(prev => [...prev, {
                question: input,
                answer: response.data
              }]);
            setInput('');
        } catch (error) {
            console.error(error);
            setCurrentAnswer('Error occurred. Please try again.');
            setConversations(prev => [...prev, {
                question: input,
                answer: 'Error occurred. Please try again.'
              }]);
        }
        setIsLoading(false);
    }

  return (
    <>
      <div className="min-h-screen relative">
        <div className="text-center text-2xl font-sans">
          <div className='flex justify-center mb-3'>
            <img src={logo} alt="ChatGPT LOGO" className='rounded-xl' />
          </div>
          ChatGPT Clone
        </div>

        <div className="min-h-screen relative pb-32">
        <div className='custom-scrollbar space-y-3 lg:space-y-4'
    style={{ scrollbarWidth: 'thin' }}>

            { isLoading ? (conversations.map((conv, index) => (
            <div key={index} className="space-y-3 lg:space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                  {conv.question}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-muted px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                  {conv.answer}
                </div>
              </div>
            </div>
          ))) : (conversations.slice(0,-1).map((conv, index) => (
            <div key={index} className="space-y-3 lg:space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                  {conv.question}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-muted px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                  {conv.answer}
                </div>
              </div>
            </div>
          ))) }

            {currentQuestion && (
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                {currentQuestion}
              </div>
            </div>
          )}
          
          {currentAnswer && (
            <div className="flex justify-start">
              <div className="bg-muted px-2 py-1 sm:px-3 sm:py-2 rounded-lg max-w-[90%]">
                {currentAnswer}
              </div>
            </div>
          )}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted px-4 py-2 rounded-lg">
                <div className="animate-pulse flex space-x-2">
                  <div className="h-2 w-2 bg-current rounded-full"></div>
                  <div className="h-2 w-2 bg-current rounded-full"></div>
                  <div className="h-2 w-2 bg-current rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

        <div className='fixed bottom-0 left-0 right-0 lg:p-6 p-3 bg-background/80 backdrop-blur-sm border-t border-secondary'>
          <div className="max-w-3xl py-2 px-1 lg:py-3 lg:px-3 rounded-xl mt-2  mx-auto flex items-center space-x-2">
            <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask any question..." className="flex-1 py-7 rounded-xl " />
            <Button disabled={isLoading} type="submit" className="p-6 rounded-lg" onClick={handleSubmit}>
              <img 
                src={sendIcon} 
                alt="" 
                className='filter hover:brightness-75 transition-all duration-200'
                style={{ filter: 'invert(60%) sepia(70%) saturate(500%) hue-rotate(80deg)' }} 
              />
            </Button>
          </div>
          <div className="text-center text-xs text-gray-600 dark:text-gray-300 mt-2 fixed bottom-0 mb-1 w-full">
               <p>© 2024 ChatGPT Clone. All rights reserved.</p> 
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
