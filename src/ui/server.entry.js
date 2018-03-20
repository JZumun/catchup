import createApp from "app.js";
export default context => new Promise((resolve, reject) => {
	const { app, router } = createApp();
	router.push(context.url);

	router.onReady(function(){
		console.log(`serving ${context.url}`);
		const components = router.getMatchedComponents();
		if(!components.length) { return reject({ code: 404 }) }
		resolve(app);
	}, reject);
})
