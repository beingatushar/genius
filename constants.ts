// import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { FaCode as Code, FaImage as ImageIcon, FaComment as MessageSquare, FaMusic as Music, FaVideo as VideoIcon } from 'react-icons/fa';

export const MAX_FREE_COUNTS = 5;

export const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },

    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image',
    },

    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: '/video',
    },
    {
        label: 'Music Generation',
        icon: Music,
        href: '/music',
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code',
    },

    {
        label: 'Image  To Text',
        icon: MessageSquare,
        href: '/image-to-text',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
];
export const testimonials = [
    {
        name: "Joel",
        avatar: "J",
        title: "Software Engineer",
        description: "This is the best application I've ever used!",
    },
    {
        name: "Antonio",
        avatar: "A",
        title: "Designer",
        description: "I use this daily for generating new photos!",
    },
    {
        name: "Mark",
        avatar: "M",
        title: "CEO",
        description: "This app has changed my life, cannot imagine working without it!",
    },
    {
        name: "Mary",
        avatar: "M",
        title: "CFO",
        description: "The best in class, definitely worth the premium subscription!",
    },
];
