export type SkillTag = 'FrequentlyUsed' | 'Learning' | 'UsedInSite';

export interface Skill {
  icon: string;
  title: string;
  description: string;
  tags?: SkillTag[];
  keywords?: string[];
}

export const skills: Skill[] = [
  {
    icon: './assets/kotlin.svg',
    title: 'Kotlin❤ / Java',
    description: `最も書き慣れた言語です`,
    tags: ['FrequentlyUsed'],
    keywords: ['Kotlin', 'Java']
  },
  {
    icon: './assets/minecraft.svg',
    title: 'Minecraft',
    description: 'Kotlin を用いて、 Paper や Velocity のプラグインを開発します\n必要に応じて、NMSを使用し、高度なプロダクトを提供します',
    tags: ['FrequentlyUsed'],
    keywords: ['Kotlin', 'Java', 'Minecraft']
  },
  {
    icon: './assets/ktor.svg',
    title: 'Ktor',
    description: 'Ktor を使ってAPIバックエンドを開発できます'
  },
  {
    icon: './assets/nextjs.svg',
    title: 'Next.js',
    description: 'サーバーサイドレンダリング (SSR) の恩恵を発揮できる設計を行い、ユーザーの使用体験を最大化します',
    tags: ['UsedInSite'],
    keywords: ['React', 'TypeScript']
  },
  {
    icon: './assets/tailwindcss.svg',
    title: 'Tailwind CSS',
    description: 'React と組み合わせて、高い可読性を保ちながら、美しい Web アプリを開発します',
    tags: ['UsedInSite'],
    keywords: ['Next.js', 'React']
  },
  {
    icon: './assets/typescript.svg',
    title: 'TypeScript',
    description: 'フロントエンドで型/Nullに対して強固な実装を行います',
    tags: ['UsedInSite'],
    keywords: ['Next.js', 'React']
  },
  {
    icon: './assets/react.svg',
    title: 'React',
    description: 'モダンな Web アプリを効率的に設計・開発します',
    tags: ['UsedInSite'],
    keywords: ['Next.js', 'TypeScript']
  },
  {
    icon: './assets/exposed.svg',
    title: 'JetBrains Exposed',
    description: 'Exposed を使って高速・効率的にデータベース操作を行います',
    tags: ['FrequentlyUsed'],
    keywords: ['Kotlin']
  },
  {
    icon: './assets/windows.svg',
    title: 'Windows App SDK',
    description: '最新の Windows をフルに活用した現代的な Windows アプリを開発します',
    keywords: ['C#', 'Windows']
  },
  {
    icon: './assets/csharp.svg',
    title: 'C#',
    description: '.NET の強みを生かして、クロスプラットフォームで動作するアプリを開発します',
    keywords: ['.NET', 'Windows', 'Windows App SDK']
  },
  {
    icon: './assets/kubernetes.svg',
    title: 'Kubernetes / Argo CD',
    description: 'GitOps の考え方に基づいて、プロダクトの迅速なデプロイを実現します',
    tags: ['Learning', 'UsedInSite'],
    keywords: ['Argo CD', 'ArgoCD', 'Kubernetes']
  },
  {
    icon: './assets/rust.svg',
    title: 'Rust',
    description: '勉強中...',
    tags: ['Learning']
  }
];