import logo from "../assets/chatgptLogo.svg";
import sendIcon from "../assets/send.svg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="text-center text-2xl font-sans">
          <div className='flex justify-center mb-3'>
            <img src={logo} alt="ChatGPT LOGO" className='rounded-xl' />
          </div>
          ChatGPT Clone
        </div>

        <div className='fixed bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-sm border-t'>
          <div className="max-w-3xl mx-auto flex items-center space-x-2">
            <Input type="text" placeholder="Ask any question..." className="flex-1 p-7 rounded-xl" />
            <Button type="submit" className="p-6 rounded-lg">
              <img 
                src={sendIcon} 
                alt="" 
                className='filter hover:brightness-75 transition-all duration-200'
                style={{ filter: 'invert(60%) sepia(70%) saturate(500%) hue-rotate(80deg)' }} 
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
