
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
  {/* GitHub */}
  <a
    href="https://github.com/Ranawataditya25"
    target="_blank"
    rel="noreferrer"
    className="social-icon transition-transform ease-out duration-200 hover:scale-110 hover:shadow-[0_0_12px_#ffffff55]"
    title="GitHub"
  >
    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/adityyarajsingh01/"
    target="_blank"
    rel="noreferrer"
    className="social-icon transition-transform ease-out duration-200 hover:scale-110 hover:shadow-[0_0_12px_#e1306c55]"
    title="Instagram"
  >
    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/aditya-raj-singh-509220311"
    target="_blank"
    rel="noreferrer"
    className="social-icon transition-transform ease-out duration-200 hover:scale-110 hover:shadow-[0_0_12px_#0a66c255]"
    title="LinkedIn"
  >
    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918107526095"
    target="_blank"
    rel="noreferrer"
    className="social-icon transition-transform ease-out duration-200 hover:scale-110 hover:shadow-[0_0_12px_#25d36655]"
    title="WhatsApp"
  >
    <img src="/assets/whatsapp.svg" alt="whatsapp" className="w-1/2 h-1/2" />
  </a>
</div>

      <p className="text-white-500">&copy; 2025 Aditya. All rights reserved.</p>
    </section>
  );
};

export default Footer;
