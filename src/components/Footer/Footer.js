import Image from "next/image";
import Link from "next/link";

const menus = [
  {
    id: 1,
    nameMenu: "صفه اصلی",
    urlMenu: "/",
  },
  {
    id: 2,
    nameMenu: "تجارب",
    urlMenu: "#Experience",
  },
  {
    id: 3,
    nameMenu: "مهارت",
    urlMenu: "#Skills",
  },
];

export const Footer = () => {
  return (
    <footer className="py-10">
      <div className="flex items-center justify-between gap-6 py-10">
        <div className="flex-1 md:flex-none">
          <Link href="/">
            <Image
              width={150}
              height={150}
              src="/logotype.png"
              alt="WebDito Logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="mt-1">
            <Link
              href="mailto:info@webdito.site"
              className="text-content-gray hover:text-black text-lg"
            >
              info@webdito.site
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/webdito"
              className="group leading-none"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  className="fill-content-gray group-hover:fill-black"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between gap-6 py-10">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {menus.map(({ id, nameMenu, urlMenu }) => (
              <li key={id}>
                <Link
                  href={urlMenu}
                  className="text-content-gray hover:text-black"
                >
                  {nameMenu}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-1 ">
          <span className="text-content-gray hover:text-black flex gap-1 text-md">
            <span>طراحی شده توسط تیم</span>
            <span className="font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              وبدیتو
            </span>
            <span>حقوق کپی رایت کامل محفوض است.</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
