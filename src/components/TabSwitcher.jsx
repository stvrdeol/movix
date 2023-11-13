import { useState } from "react";

function TabSwitcher({ data, setTab, id }) {
  const [currentTab, setCurrentTab] = useState(data[0]);
  function scrollLeft() {
    const carousel = document.querySelector(`#${id}`);
    carousel.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="relative  text-black flex items-center bg-white w-min rounded-full border-2 ">
      <section
        className={`bg-gradient-to-r from-[#F89E00] to-[#DA2F68] w-24 h-8 rounded-full absolute ${
          currentTab == data[0] ? `left-0 ` : `right-0 `
        } `}></section>
      {data.map((item, index) => {
        return (
          <span
            onClick={() => {
              setCurrentTab(item);
              setTab(() => {
                if (item == "TV Shows") {
                  return "tv";
                } else if (item == "Movies") {
                  return "movie";
                } else {
                  return item.toLowerCase();
                }
              });
              scrollLeft();
            }}
            key={index}
            className={`w-24 z-20  ${
              currentTab == item ? `text-white` : null
            }  text-center py-1 rounded-full cursor-pointer`}>
            {item}
          </span>
        );
      })}
    </section>
  );
}

export default TabSwitcher;
