import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit{

  isPlaying: boolean = false;
  audio: HTMLAudioElement | undefined;

  ngOnInit(): void {
    this.audio = new Audio('/assets/music/audio.mp3');
  }
  togglePlayback(): void {
    this.isPlaying = !this.isPlaying;

    if (!this.audio) {
      return;
    }
    // Agrega aquí la lógica para reproducir o pausar la canción según el estado
    if (this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
