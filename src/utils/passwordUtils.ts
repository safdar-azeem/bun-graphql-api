const hashPassword = async (password) => {
	const hashedPassword = await Bun.password.hash(password);
	return hashedPassword
}

const comparePassword = async (candidatePassword, hashedPassword) => {
	const isMatch = await Bun.password.verify(candidatePassword, hashedPassword);
	return isMatch
}

export { hashPassword, comparePassword }
