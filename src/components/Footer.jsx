import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-[#020C1B] text-white text-center py-14">
      <div className="max">
        <ul className="flex gap-3 items-center mx-auto w-max text-sm sm:text-lg">
          <li className="hover:text-pink cursor-pointer  transition-all">
            Terms Of Use
          </li>
          <li className="hover:text-pink cursor-pointer  transition-all">
            Privacy-Policy
          </li>
          <li className="hover:text-pink cursor-pointer  transition-all">
            About
          </li>
          <li className="hover:text-pink cursor-pointer  transition-all">
            Blog
          </li>
          <li className="hover:text-pink cursor-pointer  transition-all">
            FAQ
          </li>
        </ul>
        <div className="text-[#7D828A] text-sm sm:text-base my-8">
          Explore our extensive collection of movies and TV series, from the
          latest blockbusters to timeless classics. Enjoy personalized
          recommendations, in-depth reviews, and engaging community discussions.
          Our platform is your gateway to a world of cinematic entertainment.
          Whether you&apos;re a casual viewer or a dedicated cinema lover,
          we&apos;re here to enhance your streaming experience. Start your
          cinematic journey with us today
        </div>
        <section className="flex gap-3 w-max mx-auto ">
          <span className="hover:text-pink cursor-pointer text-2xl bg-bgBlue p-4 rounded-full hover:shadow-[0_0_10px_3px] shadow-pink transition-all">
            <FaFacebookF />
          </span>
          <span className="hover:text-pink cursor-pointer text-2xl bg-bgBlue p-4 rounded-full hover:shadow-[0_0_10px_3px] shadow-pink  transition-all">
            <FaInstagram />
          </span>
          <span className="hover:text-pink cursor-pointer text-2xl bg-bgBlue p-4 rounded-full hover:shadow-[0_0_10px_3px] shadow-pink  transition-all">
            <FaXTwitter />
          </span>
          <span className="hover:text-pink cursor-pointer text-2xl bg-bgBlue p-4 rounded-full hover:shadow-[0_0_10px_3px] shadow-pink  transition-all">
            <FaLinkedin />
          </span>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
