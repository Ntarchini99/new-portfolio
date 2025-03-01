import WhatsappIcon from "@/assets/whatsapp.png"; 

const WhatsappButton = () => {
    return (
        <a
            href="https://wa.me/5493484365436"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-2 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        >
            <img
                src={WhatsappIcon}
                alt="WhatsApp"
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-125" 
            />
        </a>
    );
}; 

export default WhatsappButton;

