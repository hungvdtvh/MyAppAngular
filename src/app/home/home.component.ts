import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Võ Duy Hưng';
  public age: Date = new Date(1993, 12, 15);
  public yearD: number = 0;
  public skills: any = [
    { skill: 'C#', year: 3.6784, type: 'Good' },
    { skill: 'Javascript', year: 1, type: 'Good' },
    { skill: 'Python', year: 2, type: 'Bad' },
  ];
  public phongBans = [
    { ten: 'Chọn phòng ban/ Trung tâm', phong: ['Chọn phòng trực thuộc'] },
  ];
  public ttTructhuoc: any = ['Chọn phòng trực thuộc'];
  public data: any = [
    {
      donvi: 'Chọn đơn vị',
      phongban: [
        { ten: 'Chọn phòng ban/ Trung tâm', phong: ['Chọn phòng trực thuộc'] },
      ],
    },
    {
      donvi: 'Viễn thông trà vinh',
      phongban: [
        { ten: 'Ban Giám Đốc', phong: [] },
        { ten: 'Phòng Kế hoạch-Kế toán', phong: [] },
        { ten: 'Phòng Kỹ thuật-Đầu tư', phong: [] },
        { ten: 'Phòng Nhân sự - Tổng hợp', phong: [] },
        {
          ten: 'Trung tâm CNTT',
          phong: ['Ban Giám đốc', 'Phòng tổng hợp', 'Phòng Giải Pháp'],
        },
        {
          ten: 'Trung tâm ĐHTT',
          phong: [
            'Ban Giám đốc',
            'Tổ Khai Thác',
            'Tổ Vô Tuyến',
            'Tổ Tổng hợp',
            'Tổ kỹ thuật 1',
            'Tổ kỹ thuật 2',
            'Tổ kỹ thuật 3',
            'Tổ kỹ thuật 4',
          ],
        },
        {
          ten: 'Trung tâm Kinh Doanh',
          phong: ['Phòng tổng hợp', 'Phòng Giải Pháp'],
        },
        {
          ten: 'Trung tâm Viễn thông 1',
          phong: ['Phòng tổng hợp', 'Phòng Giải Pháp'],
        },
        {
          ten: 'Trung tâm Viễn thông 2',
          phong: ['Phòng tổng hợp', 'Phòng Giải Pháp'],
        },
        {
          ten: 'Trung tâm Viễn thông 3',
          phong: ['Phòng tổng hợp', 'Phòng Giải Pháp'],
        },
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {
    this.age.setFullYear(1993);
    this.age.setMonth(12);
    this.age.setDate(15);
    this.yearD = new Date().getFullYear() - this.age.getFullYear();
  }

  public resetName(): void {
    //console.log("ResetName")
    this.name = '';
  }
  public ChangeValue(event: any) {
    //console.log(event.target.value);
    const pb = event.target.value;
    if (event) {
      this.phongBans = this.data.find((x: any) => x.donvi === pb)?.phongban;
      this.ttTructhuoc = ['Chọn phòng trực thuộc'];
    } else return;
  }

  public ChangeValue2(event: any) {
    //console.log(event.target.value);
    const tt = event.target.value;
    if (event) {
      this.ttTructhuoc = this.phongBans.filter((x) => x.ten === tt)[0]?.phong;
      console.log(this.ttTructhuoc);
    } else return;
  }
}
