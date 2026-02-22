import {Bot, DatabaseZap, Handshake, Network, Sparkles, Workflow} from 'lucide-react';

const iconMap = {
  DatabaseZap,
  Network,
  Workflow,
  Bot,
  Sparkles,
  Handshake
} as const;

export type ServiceIconName = keyof typeof iconMap;

export function ServiceIcon({name, className}: {name: ServiceIconName; className?: string}) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
