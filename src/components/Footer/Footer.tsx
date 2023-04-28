function Footer() {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center justify-center w-14 h-14 bg-slate-300 rounded-xl opacity-80 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 hover:opacity-100 ">
        <img
          src="http://www.jayvanhutten.com/images/thumb_geo.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default Footer;
