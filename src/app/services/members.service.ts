import { Injectable } from '@angular/core';
import { Member } from '../interface/Member';
import * as membersJson from 'src/assets/json/mphlix-members.json';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[];

  constructor() {
    this.members = (membersJson as any).default as Member[];
  }

  getAllQuestions() {
    return this.members;
  }
}