import { Component, OnInit} from '@angular/core';

declare var Recorder:any;

@Component({
    selector: 'my-app',
    template: `<button (mousedown)="record()" (mouseup)="stopAndPlay()">Record</button>
<div>{{label}}</div>
`
})
export class AppComponent implements OnInit {

    label:string;
    ngOnInit(){

        Recorder.initialize({
            swfSrc: "../recorder.swf"
        });

    }
    record(){
        Recorder.record({
            start: function(){
                this.setLabel("Recording...");
            },
            progress: function(ms){
                this.setLabel("Record progressed: " + ms + "ms");
            }
        });
    }
    stopAndPlay(){
        Recorder.stop()
        Recorder.play({
            progress: function(ms){
                this.setLabel("Play progressed: " + ms + "ms");
            }
        });

    }

    setLabel(message:string){
        this.label = message;
    }

}