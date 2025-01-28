export type InviteData = {
	id: string;
	name: string;
	partner?: string;
	code: string;
	going: boolean;
	dinner: boolean;
	responded: boolean;
	hasPlusOne: boolean;
	bringPlusOne: boolean;
	deadline: string;
	isLateInvite: boolean;
};
