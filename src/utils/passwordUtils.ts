const hashPassword = async (password: string): Promise<string> => {
	return await Bun.password.hash(password);
};

const comparePassword = async (
	candidatePassword: string,
	hashedPassword: string
): Promise<boolean> => {
	return await Bun.password.verify(candidatePassword, hashedPassword);
};

export { hashPassword, comparePassword };