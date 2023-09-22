import Layout from "@/components/Layout";
import MusicPlayer from "@/components/MusicPlayer";
export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center m-2 sm:pt-[10rem]">
        <MusicPlayer />
      </div>
    </Layout>
  );
}
