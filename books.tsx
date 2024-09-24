import React from 'react';
import { View, ScrollView, StyleSheet,Pressable, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Link } from 'expo-router';

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
return (
    <>
    <ScrollView>

      <View style={styles.container}>


        <Card>
       
          <Card.Title><Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 25, }}>Summa Theologica </Text></Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 ,  width: 100, marginBottom:10, marginLeft:100,   }}
            source={{
              uri:
                'https://m.media-amazon.com/images/I/91HvBls+5-L._AC_UF1000,1000_QL80_.jpg',
            }}
          />

          <Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 17 }}>
            Obra magna de Santo Tomás de Aquino, explorando a teologia e a filosofia cristã.
          </Text>
          <Button
          
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:'#222',
              
            }}
            title="Veja mais"
          />
        </Card>

        <Card>
    
          <Card.Title><Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 25, }}> Confissões</Text></Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 , width: 100, marginBottom:10, marginLeft:100,   }}
            source={{
              uri:
                'https://m.media-amazon.com/images/I/81wTnz5u8oL._AC_UF1000,1000_QL80_.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 17  }}>
            Memórias espirituais e filosóficas de Santo Agostinho, refletindo sobre a vida e a graça.
          </Text>    

          <Link href= "/config" asChild>
          <Pressable>
          <Button
            
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:'#222',
            }}
            title="Veja mais"
          />
            </Pressable>
    </Link>

        </Card>

        <Card>
          <Card.Title><Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 25, }}> A Cidade de Deus</Text></Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 ,   width: 100, marginBottom:10,  marginLeft:100,  }}
            source={{
              uri:
                'https://m.media-amazon.com/images/I/61DrHrvC6jL._AC_UF894,1000_QL80_.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 17 }}>
            Santo Agostinho explora a relação entre o reino de Deus e o reino humano.
          </Text>
          <Button
            
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:'#222',
            }}
            title="Veja mais"
          />
        </Card>

        <Card>
          <Card.Title><Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 25, }}> Tratado da verdadeira devoção à Santíssima Virgem</Text></Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 , width: 100, marginBottom:10,  marginLeft:100,  }}
            source={{
              uri:
                'https://livrariavozes.vtexassets.com/arquivos/ids/210295-800-auto?v=638550204837470000&width=800&height=auto&aspect=true',
            }}
          />
          <Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 17 }}>          
           Entrega total a Maria como meio de alcançar uma união mais profunda com Jesus Cristo. 
          </Text>
          <Button
            
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:'#222',
            }}
            title="Veja mais"
          />
        </Card>

        <Card>
          <Card.Title><Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 25, }}> Vida Paixão E Glorificação Do Cordeiro De Deus</Text></Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 ,   width: 100, marginBottom:10,  marginLeft:100,  }}
            source={{
              uri:
                'https://m.media-amazon.com/images/I/81V51g+PBdL._AC_UF1000,1000_QL80_.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, marginLeft: 20,fontSize: 17 }}>
          Os sofrimentos horríveis suportados por nosso Salvador baseado nas visões da Beata Anna Catharina Emmerich.
          </Text>
          <Button
            
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:'#222',
            }}
            title="Veja mais"
          />
        </Card>

      </View>
     

    </ScrollView>
  </>


);
};

const styles = StyleSheet.create({


container: {
  flex: 1,
  width:350,
},
fonts: {
  marginBottom: 8,
},
image: {
  width: 30,
  marginRight: 80,
},
name: {
  fontSize: 16,
  marginTop: 5,
},

});

export default Cards;