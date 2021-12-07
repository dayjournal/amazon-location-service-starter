import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

async function mapCreate() {
    const map = await maplibregljsamplify.createMap({
        container: 'map',
        center: [139.7648, 35.6794],
        zoom: 15,
        bearing: 64.8,
        pitch: 60,
        hash: true,
    });
    map.addControl(new maplibregl.NavigationControl());
}
mapCreate();
