export default {
    singular: true,
    routes: [{
        path: '/',
        component: '../layout/',
        routes: [{
            path: "helloworld",
            component: "../page/helloWorld"
        }]
    }],
    plugins: [
        [
            "umi-plugin-react", {
            "antd": true
        }
        ]
    ]
}