import {
  HumanSvg,
  AwardSvg,
  HomeSvg,
  InboxSvg,
  LogoutSvg,
  RefreshSvg,
  TrashSvg,
  XCircleSvg,
  SaveSvg,
} from "./svgs";

const I = {
  human: HumanSvg,
  award: AwardSvg,
  home: HomeSvg,
  inbox: InboxSvg,
  logout: LogoutSvg,
  refresh: RefreshSvg,
  trash: TrashSvg,
  xCircle: XCircleSvg,
  save: SaveSvg,
};

type IProps = {
  i: keyof typeof I;
  fill?: string;
  size?: number;
};

const Icons = ({ i = "human", ...rest }: IProps) => {
  const ISvg = I[i] || null;

  if (!ISvg) return;

  return <ISvg className="inline-block" {...rest} />;
};

export { Icons };
