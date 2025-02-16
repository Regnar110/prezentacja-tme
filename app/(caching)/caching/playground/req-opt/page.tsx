
export const dynamic = 'force-dynamic';

const NestedFour = async () => {
	await fetch('http://localhost:3000/api')
	await fetch('http://localhost:3000/api')
	return <span>Koniec.</span>
};

const NestedThree = async () => {
	await fetch('http://localhost:3000/api')
	await fetch('http://localhost:3000/api')
	return (
		<NestedFour />
	);
};


const NestedTwo = async () => {
	await fetch('http://localhost:3000/api')
	await fetch('http://localhost:3000/api')
	return (
		<NestedThree />
	);
};

const NestedOne = async ({ children }: any) => {
	await fetch('http://localhost:3000/api')
	await fetch('http://localhost:3000/api')
	return (
		<NestedTwo />
	);
};

export default async function ReqOptPlayground() {
	await fetch('http://localhost:3000/api')

	return (
		<div><NestedOne /></div>
	)
}