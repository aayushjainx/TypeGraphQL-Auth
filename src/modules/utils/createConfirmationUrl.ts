import { redis } from "../../redis";
import { v4 } from "uuid";

export const createConfirmationUrl = async (
	userId: number
): Promise<string> => {
	const token = v4();
	await redis.set(token, userId, "EX", 60 * 60 * 24); // 1 day expiration
	return `http://localhost:3000/confirm/${token}`;
};
