import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github, Mail, Dribbble } from "lucide-react";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      dribbble?: string;
      email?: string;
    };
  };
}

export default function TeamCard({ member }: TeamMemberProps) {
  return (
    <Card className="team-member-card group bg-white shadow-md overflow-hidden border-none h-full">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          // Fallback untuk dummy image jika file tidak tersedia
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/300x300?text=${member.name.split(' ').map(n => n[0]).join('')}`;
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-nexgen-600 mb-4">{member.position}</p>
        <p className="text-gray-600 mb-4 text-sm">
          {member.bio}
        </p>
        <div className="team-social flex space-x-4 text-gray-400">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              className="transition-colors hover:text-nexgen-600"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              className="transition-colors hover:text-nexgen-600"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              className="transition-colors hover:text-nexgen-600"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.dribbble && (
            <a
              href={member.socialLinks.dribbble}
              className="transition-colors hover:text-nexgen-600"
              aria-label="Dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dribbble className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.email && (
            <a
              href={member.socialLinks.email}
              className="transition-colors hover:text-nexgen-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}