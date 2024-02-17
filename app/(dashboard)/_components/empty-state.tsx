import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EmptyStateProps {
    type: string;
    message: {
        primary?: string;
        secondary?: string;
    };
    imageSize: {
        width: number;
        height: number;
    };
    button: {
        display: boolean;
        text?: string;
    }
}

export const EmptyState = ({
    type,
    message,
    imageSize,
    button
}: EmptyStateProps) => {
 
    let imagePath = "";
    if (type === "search") {
        imagePath = "/empty-search.svg";
    } else if (type === "favorites") {
        imagePath = "/empty-favorites.svg";
    } else {
        imagePath = "/note.svg";
    }

            
    return (
        <div className="h-full flex flex-col items-center justify-center">
        
            <Image
                src={imagePath}
                height={imageSize.height}
                width={imageSize.width}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                {message.primary}
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                {message.secondary}
            </p>

            {
                button.display && (
                    <div className="mt-6">
                        <Button size="lg">
                            {button.text}
                        </Button>
                    </div>
                )
            }

        </div>
    )

}