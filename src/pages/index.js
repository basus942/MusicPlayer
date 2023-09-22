import Layout from "@/components/Layout";
import MusicPlayer from "@/components/MusicPlayer";
export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center m-2 pt-10">
        <MusicPlayer />
      </div>
    </Layout>
  );
}
