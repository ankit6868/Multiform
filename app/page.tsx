import CollaborationForm from '@/components/CollaborationForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Are you starting a new project?
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Let&apos;s collaborate!
      </h2>
      <p className="text-white text-center mb-12">
        Please fill out this short form to get started, I&apos;ll get back to you shortly.
      </p>
      <CollaborationForm />
    </main>
  );
}