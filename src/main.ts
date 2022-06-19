import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { createMap } from "maplibre-gl-js-amplify";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

async function mapCreate() {
    const map = await createMap({
        container: 'map',
        center: [139.767, 35.681],
        zoom: 11,
    });
    map.addControl(
        new maplibregl.NavigationControl({
            visualizePitch: true,
        })
    );
}
mapCreate();
