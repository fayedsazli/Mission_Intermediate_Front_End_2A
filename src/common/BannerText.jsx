import Button from "./Button";
const BannerText = () => {
  return (
    <div className="d-flex justify-content-center flex-column  px-0 py-3 p-lg-5 gap-2">
      <h1>
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h1>
      <p>
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman
        Anda.
      </p>
        <Button text={"Temukan Video Course untuk Dipelajari!"}/>      
    </div>
  );
};

export default BannerText;
