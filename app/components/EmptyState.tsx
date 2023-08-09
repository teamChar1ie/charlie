'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";
import RequestExpertModal from "./modals/RequestExpertModal";
import ClientOnly from "./ClientOnly";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters or request an expert.",
  showReset
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className="w-48 mt-4">
        {showReset && (
          <div>
            <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
            />
            <ClientOnly>
              <RequestExpertModal />
            </ClientOnly>
          </div>
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;