import { AppWindow, Gamepad2, Globe, PaintBucket, Pickaxe } from "lucide-react";
import Card from "./Card";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section>
      <div className="container justify-center mx-auto px-5 py-24">
        <div className="flex flex-wrap">
          <Card icon={<Globe size={18} />} title="Web">
            <p>フロントエンドに React と TypeScript 、バックエンドには Spring Boot や Ktor を使用して複雑な Web アプリを開発します</p>
          </Card>
          <Card icon={<Pickaxe size={18} />} title="Minecraft">
            <p>Java/Kotlin で Minecraft の Paper プラグインや Velocity プラグイン、MOD を開発します</p>
          </Card>
          <Card icon={<AppWindow size={18} />} title="Windows App">
            <p>Windows App SDK (C#) と XAML で Windows アプリを開発します</p>
          </Card>
          <Card icon={<PaintBucket size={18} />} title="テクスチャ">
            <p>ゲームで使用するテクスチャや、3Dモデルを作成します</p>
          </Card>
          <Card icon={<Gamepad2 size={18} />} title="ゲーム">
            <p>Java + Swing で横スクロール型のレトロゲームを開発します</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;