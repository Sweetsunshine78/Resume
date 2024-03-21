const febHolidays = [
    "Bhargab ,",
    "First of all, sorry for dstrbing🙏",
    "Tumi kio imn khong kora😥",
    "Ik moi beya pale tumar eko fark nopore 🙂",
    "But manuhe stranger etako kiba hole ghopokke beyake nkoi",
    "🙂Uk naa i love u",
    "Tumi jana teneke kole mor beya lage😥",
    "Baru eko nhoi 🙂 bhal pua jone he gali parise 🙂",
    "Bhoi ee lage mor tumi aru mok hodai ignore koriba jen lage😓,",
    "🙂bhal lage tumak",
    "Tumi jimn rudely koleo mor tumar ee lgt thakibo mon jai",
    "But tumi sage 60% mok beya ee pua😩",
    "But i loveeeeeeee you ❤️",
    "I miss you 🙂💞",
    "I miss our old chats 🤌",
    "Tumi agote jenekoi asils mor lgt ekdm frst frst😩❤️uff💞",
    "I miss our old vdo chats 🙂",
    "😂that eye contact at digholi pukhuri 🌚🌝",
    "I miss the way u pulled me closer 🙈",
    "And kissed me🙈",
    "Tetiya tumk koisilu je moi tumar khong dekha nai",
    "Etiya dekhisu 😥😩,",
    "And it hurts..",
    "Once u called me 'baby'..",
    "Also..'unofficial gf'..🙃,",
    "Kio khong kora imn mok😓",
    "Mok gali nidiba naa 🙂",
    "Morom koriba 🙂",
    "🙂Nalage diya ene koisu.. morom kora buli kole sor he mariba sage😓",
    "But..my love..i really care about you.. 🙂,",
    "Ignore nokoribs 🙂 kiba kibi jot lagi jai ketiyaba.. imn smooth nhoi tu 🙂 but please mok beya napaba🙏 love you ❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
