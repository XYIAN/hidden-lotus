import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-4 px-4 text-center border-t border-sage-green-200/30 bg-light-tan/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/story"
          className="text-earth-brown/80 hover:text-earth-brown transition-colors duration-200 text-sm font-medium"
        >
          Learn More
        </Link>
      </div>
    </footer>
  );
}
