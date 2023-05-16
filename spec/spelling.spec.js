import Spelling from '../src/scripts/Spelling';

/**
 */

describe('Spelling', () => {

  /* cek input */
  it('Harus gagal kalo input bukan angka', function () {
    const number = NaN;

    expect(() => {
      Spelling.spell(number);
    }).toThrowError(Error);
  });
 
  /* cek tipe output */
  it('Harus menghasilkan string', () => {
    const resultType = typeof Spelling.spell(1);
    expect(resultType).toBe('string');
  });

  /* cek hasil */
  it('Jika input 1 maka hasilnya "satu"', () => {
    const result = Spelling.spell(1);
    expect(result).toBe('satu');
  });

  it('Jika input 2 maka hasilnya "dua"', () => {
    const result = Spelling.spell(2);
    expect(result).toBe('dua');
  });

  it('Jika input 3 maka hasilnya "tiga"', () => {
    const result = Spelling.spell(3);
    expect(result).toBe('tiga');
  });

  it('Jika input 4 maka hasilnya "empat"', () => {
    const result = Spelling.spell(4);
    expect(result).toBe('empat');
  });

  it('Jika input 5 maka hasilnya "lima"', () => {
    const result = Spelling.spell(5);
    expect(result).toBe('lima');
  });

  it('Jika input 6 maka hasilnya "enam"', () => {
    const result = Spelling.spell(6);
    expect(result).toBe('enam');
  });

  it('Jika input 7 maka hasilnya "tujuh"', () => {
    const result = Spelling.spell(7);
    expect(result).toBe('tujuh');
  });

  it('Jika input 8 maka hasilnya "delapan"', () => {
    const result = Spelling.spell(8);
    expect(result).toBe('delapan');
  });

  it('Jika input 9 maka hasilnya "sembilan"', () => {
    const result = Spelling.spell(9);
    expect(result).toBe('sembilan');
  });

  it('Jika input 10 maka hasilnya "sepuluh"', () => {
    const result = Spelling.spell(10);
    expect(result).toBe('sepuluh');
  });
  
  it('Jika input 20 maka hasilnya "dua puluh"', () => {
    const result = Spelling.spell(20);
    expect(result).toBe('dua puluh');
  });
  
  it('Jika input 21 maka hasilnya "dua puluh satu"', () => {
    const result = Spelling.spell(21);
    expect(result).toBe('dua puluh satu');
  });
  
  it('Jika input 11 maka hasilnya "sebelas"', () => {
    const result = Spelling.spell(11);
    expect(result).toBe('sebelas');
  });

  it('Jika input 12 maka hasilnya "dua belas"', () => {
    const result = Spelling.spell(12);
    expect(result).toBe('dua belas');
  });
  
  it('Jika input 100 maka hasilnya "seratus"', () => {
    const result = Spelling.spell(100);
    expect(result).toBe('seratus');
  });
  
  it('Jika input 200 maka hasilnya "dua ratus"', () => {
    const result = Spelling.spell(200);
    expect(result).toBe('dua ratus');
  });
  
  it('Jika input 110 maka hasilnya "seratus sepuluh"', () => {
    const result = Spelling.spell(110);
    expect(result).toBe('seratus sepuluh');
  });
  
  it('Jika input 120 maka hasilnya "seratus dua puluh"', () => {
    const result = Spelling.spell(120);
    expect(result).toBe('seratus dua puluh');
  });
  
  it('Jika input 111 maka hasilnya "seratus sebelas"', () => {
    const result = Spelling.spell(111);
    expect(result).toBe('seratus sebelas');
  });
  
  it('Jika input 112 maka hasilnya "seratus dua belas"', () => {
    const result = Spelling.spell(112);
    expect(result).toBe('seratus dua belas');
  });

});
