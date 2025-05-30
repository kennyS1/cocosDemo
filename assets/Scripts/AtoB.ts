import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AtoB')
export class AtoB extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public onClickAtoB() {
        //合并之后修改跳转场景
        director.loadScene('RankScene');
        console.log("AtoB clicked");
    }
}


