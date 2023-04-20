import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Path() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/login");
	}, []);

	return (
		<div className="w-full h-screen flex flex-row justify-center items-center">
			<h1 className="text-5xl">404</h1>
		</div>
	);
}
