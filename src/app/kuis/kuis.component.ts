import { Component, OnInit } from '@angular/core';
import{ Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  dataMahasiswa:Mahasiswa[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }
  tambahMahasiswa(){
    this.mahasiswa = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.dataMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
