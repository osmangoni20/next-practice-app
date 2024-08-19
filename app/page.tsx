import Image from "next/image";
import banner from "@/public/banner1.jpg"
export default function Home() {
  return (
    <main className="mt-5">
      <div>
    <div>
    <Image src={banner} alt="Banner Image" placeholder="blur" quality={100} />

    </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
          esse beatae ipsum sapiente porro. Eum corporis magnam quaerat rerum ab
          consectetur quas minus eos cum non? Libero quae in dolor modi
          voluptatum atque, inventore corporis iusto ipsum, eius laudantium,
          eligendi veniam delectus. Iste laboriosam molestiae eius voluptatum
          quas dolorum saepe maxime repudiandae libero inventore tempora,
          consectetur, beatae consequuntur! Vitae dolorem perferendis error? Ad
          consequatur blanditiis esse molestiae soluta aspernatur vero. Eius
          pariatur laborum mollitia quos culpa alias sint? Obcaecati vel
          molestias et voluptates laudantium consequatur doloremque quas, at
          impedit! Nobis labore voluptas incidunt molestiae dolore pariatur
          saepe autem? Mollitia.
        </p>
      </div>
    </main>
  );
}
